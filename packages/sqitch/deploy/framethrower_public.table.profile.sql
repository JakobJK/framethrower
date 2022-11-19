-- Deploy flipr:framethrower_public.table.profile to pg

begin;

  create table framethrower_public.profile(
    id uuid primary key not null default uuid_generate_v4(),
    created_at timestamptz default now() not null,
    updated_at timestamptz default now() not null,
    username text not null unique,
    about text,
    firstname text,
    lastname text,
    reel_description text,
    avatar text,
    banner text,
    occupation text,
    role framethrower_public.user_role not null default 'framethrower_inactive',
    organisation text,
    reel text,
    CONSTRAINT users_username_check CHECK (((length((username)::text) >= 2) AND (length((username)::text) <= 24) AND (username ~ '^[a-zA-Z]([_]?[a-zA-Z0-9])+$')))
  );



  create index on framethrower_public.profile (lower(username));
  grant select on table framethrower_public.profile
  to framethrower_anonymous, framethrower_banned, framethrower_inactive, framethrower_user, framethrower_moderator, framethrower_admin;
  grant update on table framethrower_public.profile to framethrower_user, framethrower_admin, framethrower_moderator;

commit;
