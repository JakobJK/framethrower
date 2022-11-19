-- Deploy flipr:framethrower_public.table.tumbleweed to pg

BEGIN;

  create table framethrower_public.tumbleweed(
    id uuid primary key not null default uuid_generate_v4(),
    submission_id text references framethrower_public.submission(id) on delete cascade unique,
    created_at timestamptz default now() not null
  );

COMMIT;
