begin;
  select plan(8);

  select columns_are('framethrower_private', 'profile_secrets', array['profile_id', 'email', 'cache_folder', 'password_hash', 'framethrower_serial_key', 'email_verified']);

  select col_is_fk('framethrower_private', 'profile_secrets', 'profile_id', 'company_id is a foreign key');
  select col_type_is('framethrower_private', 'profile_secrets', 'profile_id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_private', 'profile_secrets', 'email', 'text', 'upload_id is the type of uuid');

  select col_type_is('framethrower_private', 'profile_secrets', 'cache_folder', 'text', 'cache_folder is the type of text');
  select col_type_is('framethrower_private', 'profile_secrets', 'password_hash', 'text', 'password_hash is the type of text');
  select col_type_is('framethrower_private', 'profile_secrets', 'framethrower_serial_key', 'uuid', 'framethrower_serial_key is the type of uuid');
  select col_type_is('framethrower_private', 'profile_secrets', 'email_verified', 'boolean', 'email_verified is the type of boolean');

  select * from finish();

rollback;