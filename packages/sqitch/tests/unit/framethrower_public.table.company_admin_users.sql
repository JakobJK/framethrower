begin;
  select plan(9);

  select columns_are('framethrower_public', 'company_admin_users', array['id', 'company_id', 'profile_id', 'created_at', 'updated_at']);

  select col_is_pk('framethrower_public', 'company_admin_users', 'id', 'id is a primary key');
  select col_is_fk('framethrower_public', 'company_admin_users', 'company_id', 'profile_id is a foreign key');
  select col_is_fk('framethrower_public', 'company_admin_users', 'profile_id', 'profile_id is a foreign key');

  select col_type_is('framethrower_public', 'company_admin_users', 'id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_public', 'company_admin_users', 'company_id', 'uuid', 'company_id is the type of uuid');
  select col_type_is('framethrower_public', 'company_admin_users', 'profile_id', 'uuid', 'profile_id is the type of uuid');
  select col_type_is('framethrower_public', 'company_admin_users', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone');
  select col_type_is('framethrower_public', 'company_admin_users', 'created_at', 'timestamp with time zone', 'updated_at is the type of "timestamp with time zone');

  select * from finish();
rollback;