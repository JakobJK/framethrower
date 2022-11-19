begin;
  select plan(7);

  select columns_are('framethrower_public', 'company_group_premium', array['id', 'premium_id', 'company_group_id']);

  select col_is_pk('framethrower_public', 'company_group_premium', 'id', 'id is a primary key');
  select col_is_fk('framethrower_public', 'company_group_premium', 'premium_id', 'premium_id is a foreign key');
  select col_is_fk('framethrower_public', 'company_group_premium', 'company_group_id', 'premium_id is a foreign key');

  select col_type_is('framethrower_public', 'company_group_premium', 'id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_public', 'company_group_premium', 'premium_id', 'uuid', 'premium_id is the type of uuid');
  select col_type_is('framethrower_public', 'company_group_premium', 'company_group_id', 'uuid', 'company_group_id is the type of uuid');

  select * from finish();
rollback;