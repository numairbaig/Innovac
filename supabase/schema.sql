-- INNOVAC BIOTECHNOLOGIES - DATABASE SCHEMA INITIALIZATION
-- Run this in the Supabase SQL Editor to set up all tables, relations, and RLS policies.

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Define Roles Type Enum
create type user_role as enum ('PUBLIC_USER', 'EMPLOYEE', 'COLLABORATOR', 'SUPERVISOR', 'ADMIN', 'SUPER_ADMIN');
create type account_status as enum ('Active', 'Inactive', 'Suspended');

-- 1. BASE PROFILES TABLE
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null unique,
  full_name text not null,
  avatar_url text,
  phone text,
  country text,
  city text,
  role user_role not null default 'PUBLIC_USER',
  status account_status not null default 'Active',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS on profiles
alter table public.profiles enable row level security;

-- 2. EMPLOYEE PROFILES
create table public.employee_profiles (
  id uuid default uuid_generate_v4() primary key,
  profile_id uuid references public.profiles(id) on delete cascade unique not null,
  employee_id text unique not null,
  department text not null,
  position text not null,
  supervisor_id uuid references public.profiles(id) on delete set null,
  joining_date date not null,
  research_area text,
  employment_status text not null default 'Full-time'
);

alter table public.employee_profiles enable row level security;

-- 3. COLLABORATOR PROFILES
create table public.collaborator_profiles (
  id uuid default uuid_generate_v4() primary key,
  profile_id uuid references public.profiles(id) on delete cascade unique not null,
  collaborator_id text unique not null,
  organization text not null,
  professional_role text not null,
  research_area text,
  collaboration_status text not null default 'Active'
);

alter table public.collaborator_profiles enable row level security;

-- 4. PROJECTS
create table public.projects (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  code text unique not null,
  objective text,
  description text,
  supervisor_id uuid references public.profiles(id) on delete set null,
  status text not null default 'Planning',
  start_date date,
  deadline date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.projects enable row level security;

-- 5. PROJECT MEMBERS
create table public.project_members (
  id uuid default uuid_generate_v4() primary key,
  project_id uuid references public.projects(id) on delete cascade not null,
  profile_id uuid references public.profiles(id) on delete cascade not null,
  role text not null,
  unique(project_id, profile_id)
);

alter table public.project_members enable row level security;

-- 6. TASKS
create table public.tasks (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  assigned_to uuid references public.profiles(id) on delete set null,
  project_id uuid references public.projects(id) on delete cascade,
  priority text not null default 'Medium',
  start_date date,
  due_date date,
  status text not null default 'To Do',
  attachments text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.tasks enable row level security;

-- 7. RESEARCH ASSIGNMENTS
create table public.research_assignments (
  id uuid default uuid_generate_v4() primary key,
  project_id uuid references public.projects(id) on delete cascade not null,
  title text not null,
  objective text,
  description text,
  methodology text,
  assigned_to uuid references public.profiles(id) on delete set null,
  supervisor_id uuid references public.profiles(id) on delete set null,
  start_date date,
  deadline date,
  status text not null default 'Active',
  milestones jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.research_assignments enable row level security;

-- 8. RESEARCH REPORTS
create table public.research_reports (
  id uuid default uuid_generate_v4() primary key,
  assignment_id uuid references public.research_assignments(id) on delete cascade not null,
  researcher_id uuid references public.profiles(id) on delete cascade not null,
  report_title text not null,
  progress integer not null default 0,
  notes text,
  files text[],
  status text not null default 'Draft',
  feedback text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.research_reports enable row level security;

-- 9. ATTENDANCE
create table public.attendance (
  id uuid default uuid_generate_v4() primary key,
  profile_id uuid references public.profiles(id) on delete cascade not null,
  check_in timestamp with time zone not null,
  check_out timestamp with time zone,
  duration_minutes integer,
  status text not null default 'Present',
  notes text,
  date date not null default current_date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(profile_id, date)
);

alter table public.attendance enable row level security;

-- 10. DOCUMENTS
create table public.documents (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  category text not null,
  file_url text not null,
  uploaded_by uuid references public.profiles(id) on delete set null,
  project_id uuid references public.projects(id) on delete cascade,
  permissions jsonb, -- e.g. { "roles": ["EMPLOYEE"] }
  status text not null default 'Active',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.documents enable row level security;

-- 11. INTERNSHIPS
create table public.internships (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text not null,
  eligibility text,
  research_area text,
  duration text,
  requirements text[],
  instructions text,
  status text not null default 'Active',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.internships enable row level security;

-- 12. APPLICATIONS
create table public.applications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  internship_id uuid references public.internships(id) on delete cascade not null,
  status text not null default 'Submitted',
  notes text,
  files text[],
  submitted_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.applications enable row level security;

-- 13. WORKSHOPS
create table public.workshops (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text not null,
  topic text not null,
  instructor text,
  date timestamp with time zone,
  duration text,
  info text,
  faq jsonb,
  status text not null default 'Active',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.workshops enable row level security;

-- 14. REGISTRATIONS
create table public.registrations (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  workshop_id uuid references public.workshops(id) on delete cascade not null,
  status text not null default 'Registered',
  notes text,
  registered_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.registrations enable row level security;

-- 15. ENQUIRIES
create table public.enquiries (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  status text not null default 'New',
  type text not null default 'General',
  assigned_to uuid references public.profiles(id) on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.enquiries enable row level security;

-- 16. QUOTE REQUESTS
create table public.quote_requests (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  organization text,
  service text not null,
  research_requirement text,
  description text,
  files text[],
  status text not null default 'New',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.quote_requests enable row level security;

-- 17. MESSAGES
create table public.messages (
  id uuid default uuid_generate_v4() primary key,
  sender_id uuid references public.profiles(id) on delete cascade not null,
  recipient_id uuid references public.profiles(id) on delete cascade not null,
  content text not null,
  status text not null default 'Unread',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.messages enable row level security;

-- 18. NOTIFICATIONS
create table public.notifications (
  id uuid default uuid_generate_v4() primary key,
  profile_id uuid references public.profiles(id) on delete cascade not null,
  title text not null,
  message text not null,
  status text not null default 'Unread',
  trigger_type text,
  link text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.notifications enable row level security;

-- 19. CALENDAR EVENTS
create table public.calendar_events (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  start_time timestamp with time zone not null,
  end_time timestamp with time zone not null,
  event_type text not null default 'Meeting',
  audience text[] default array['EMPLOYEE', 'COLLABORATOR'],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.calendar_events enable row level security;

-- 20. AUDIT LOGS
create table public.audit_logs (
  id uuid default uuid_generate_v4() primary key,
  operator_id uuid references public.profiles(id) on delete set null,
  action text not null,
  target text not null,
  details text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.audit_logs enable row level security;


-- =========================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =========================================================================

-- Profiles Policies
create policy "Allow public read access to active profiles" on public.profiles
  for select using (status = 'Active');

create policy "Allow users to update their own profile" on public.profiles
  for update using (auth.uid() = id);

create policy "Allow admins complete access to profiles" on public.profiles
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('ADMIN', 'SUPER_ADMIN')
    )
  );

-- Attendance Policies
create policy "Allow users to read their own attendance" on public.attendance
  for select using (auth.uid() = profile_id);

create policy "Allow employees to check-in/out their own attendance" on public.attendance
  for insert with check (auth.uid() = profile_id);

create policy "Allow employees to update check-out on their own attendance record" on public.attendance
  for update using (auth.uid() = profile_id);

create policy "Allow admins full access to attendance" on public.attendance
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('ADMIN', 'SUPER_ADMIN')
    )
  );

-- Tasks Policies
create policy "Allow users to see their assigned tasks" on public.tasks
  for select using (auth.uid() = assigned_to);

create policy "Allow project members to see project tasks" on public.tasks
  for select using (
    exists (
      select 1 from public.project_members
      where project_id = tasks.project_id and profile_id = auth.uid()
    )
  );

create policy "Allow supervisors and admins full access to tasks" on public.tasks
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('SUPERVISOR', 'ADMIN', 'SUPER_ADMIN')
    )
  );

-- Research Assignments Policies
create policy "Allow assigned researcher to view research" on public.research_assignments
  for select using (auth.uid() = assigned_to);

create policy "Allow supervisors and admins to view research" on public.research_assignments
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('SUPERVISOR', 'ADMIN', 'SUPER_ADMIN')
    )
  );

-- Notifications Policies
create policy "Allow users to view and update their own notifications" on public.notifications
  using (auth.uid() = profile_id);

-- Applications Policies
create policy "Allow users to manage their own applications" on public.applications
  using (auth.uid() = user_id);

create policy "Allow admins full access to applications" on public.applications
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('ADMIN', 'SUPER_ADMIN')
    )
  );
