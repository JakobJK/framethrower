-- Deploy flipr:framethrower_private.table.profile_secrets to pg

begin;

  create table framethrower_private.profile_secrets(
  profile_id uuid not null unique references framethrower_public.profile(id) on delete cascade,
  email text not null unique check (email~* '^.+@.+\..+$'),
  cache_folder text,
  password_hash text not null,
  framethrower_serial_key uuid not null default uuid_generate_v4(),
  email_verified boolean not null default false
  );

commit;