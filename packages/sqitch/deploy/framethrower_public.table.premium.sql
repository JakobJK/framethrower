-- Deploy flipr:framethrower_public.table.premium to pg

begin;

  create table framethrower_public.premium (
    id uuid primary key not null default uuid_generate_v4(),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    premium_definition_id uuid not null references framethrower_public.premium_definition(id) on delete cascade,
    profile_id uuid unique not null references framethrower_public.profile(id),
    built_in_feedback int default 0 not null,
    purchased_feedback int default 0 not null,
    status framethrower_public.premium_status not null default 'active'
  );

  grant select on table framethrower_public.premium
  to framethrower_banned, framethrower_inactive, framethrower_anonymous, framethrower_user, framethrower_moderator, framethrower_admin;

commit;