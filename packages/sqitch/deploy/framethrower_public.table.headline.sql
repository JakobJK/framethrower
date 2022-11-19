-- Deploy flipr:framethrower_public.table.headline to pg

BEGIN;

create table framethrower_public.headline(
  id uuid primary key not null default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  title text,
  thumbnail text not null,
  link text not null
);

grant select on table framethrower_public.headline to framethrower_anonymous, framethrower_inactive, framethrower_banned, framethrower_user, framethrower_admin;
grant insert on table framethrower_public.headline to framethrower_admin;

COMMIT;
