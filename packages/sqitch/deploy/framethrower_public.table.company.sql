-- Deploy flipr:framethrower_public.table.company to pg

begin;

  create table framethrower_public.company(
    id uuid primary key not null default uuid_generate_v4(),
    name text not null unique,
    name_url_safe text not null unique,
    link text,
    logo text,
    description text,
    public boolean default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    address json,
    CONSTRAINT name_url_safe CHECK (name_url_safe ~ '^[a-zA-Z]([_]?[a-zA-Z0-9])+$')
  );

  grant select on table framethrower_public.company to
    framethrower_anonymous,
    framethrower_user,
    framethrower_moderator,
    framethrower_admin;

commit;