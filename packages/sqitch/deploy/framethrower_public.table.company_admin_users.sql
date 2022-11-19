-- Deploy flipr:framethrower_private.table.company_admin_users to pg


begin;
  create table framethrower_public.company_admin_users(
    id uuid primary key not null default uuid_generate_v4(),
    company_id uuid not null references framethrower_public.company(id) on delete cascade,
    profile_id uuid unique not null references framethrower_public.profile(id) on delete cascade,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
  );

grant select on table framethrower_public.company_admin_users to framethrower_anonymous, framethrower_inactive, framethrower_banned, framethrower_user, framethrower_admin;

commit;

