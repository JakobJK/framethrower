begin;
  select plan(9);

  select columns_are('framethrower_public', 'company_pro_group', array['id', 'company_id', 'slug', 'description', 'group_name', 'created_at', 'updated_at']);

  select col_is_pk('framethrower_public', 'company_pro_group', 'id', 'id is a primary key');
  select col_is_fk('framethrower_public', 'company_pro_group', 'company_id', 'profile_id is a foreign key');

  select col_type_is('framethrower_public', 'company_pro_group', 'id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_public', 'company_pro_group', 'group_name', 'text', 'group_name is the type of text');
  select col_type_is('framethrower_public', 'company_pro_group', 'slug', 'text', 'slug is the type of text');
  select col_type_is('framethrower_public', 'company_pro_group', 'description', 'text', 'description is the type of text');
  select col_type_is('framethrower_public', 'company_pro_group', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone');
  select col_type_is('framethrower_public', 'company_pro_group', 'updated_at', 'timestamp with time zone', 'updated_at is the type of "timestamp with time zone');

  select * from finish();
rollback;