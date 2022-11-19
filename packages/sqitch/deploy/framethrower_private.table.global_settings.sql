-- Deploy flipr:framethrower_private.table.global_settings to pg

begin;

  create table framethrower_private.global_settings(
  id uuid primary key not null default uuid_generate_v4(),
  name text not null,
  value text not null
);

  insert into framethrower_private.global_settings
  (name, value)
  values
  ('user_registration_cap', 'true'),
  ('max_allowed_users', '10'),
  ('enable_users_login','true'),
  ('current_state', 'beta');

commit;
