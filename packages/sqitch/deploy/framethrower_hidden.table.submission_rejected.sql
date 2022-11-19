-- Deploy flipr:framethrower_hidden.table.submission_rejected to pg

begin;

  create table framethrower_hidden.submission_rejected(
    id uuid primary key not null default uuid_generate_v4(),
    upload_id uuid not null references framethrower_hidden.upload(id) on delete cascade,
    profile_id uuid not null references framethrower_public.profile(id) on delete cascade,
    created_at timestamptz not null default now()
  );

commit;
