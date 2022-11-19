-- Deploy flipr:framethrower_public.table.news to pg

begin;

  create table framethrower_public.news(
    id uuid primary key not null default uuid_generate_v4(),
    updated_at timestamptz not null default now(),
    created_at timestamptz not null default now(),
    title text not null unique,
    body text not null,
    intro text not null,
    thumbnail text not null,
    slug text unique,
    profile_id uuid not null references framethrower_public.profile(id) on delete cascade,
    status framethrower_public.publish_status not null default 'published'
  );

  grant select on table framethrower_public.news to framethrower_inactive, framethrower_anonymous, framethrower_user, framethrower_moderator;
  grant select, insert, update, delete on table framethrower_public.news to framethrower_admin;

commit;
