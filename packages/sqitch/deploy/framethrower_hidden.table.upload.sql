-- Deploy flipr:framethrower_hidden.table.uploads to pg

begin;

  create table framethrower_hidden.upload(
    id uuid primary key not null default uuid_generate_v4(),
    profile_id uuid not null references framethrower_public.profile(id) on delete cascade,
    created_at timestamptz not null default now(),
    file_url text,
    purpose framethrower_public.file_upload_purpose not null
  );

commit;