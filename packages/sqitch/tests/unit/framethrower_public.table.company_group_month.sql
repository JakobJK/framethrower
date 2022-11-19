begin;
  select plan(10);

  select columns_are('framethrower_public', 'company_group_month', array['id', 'amount_feedbacks', 'group_id', 'month', 'year', 'created_at', 'updated_at']);

  select col_is_pk('framethrower_public', 'company_group_month', 'id', 'id is a primary key');
  select col_is_fk('framethrower_public', 'company_group_month', 'group_id', 'group_id is a foreign key');

  select col_type_is('framethrower_public', 'company_group_month', 'id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_public', 'company_group_month', 'group_id', 'uuid', 'group_id is the type of uuid');
  select col_type_is('framethrower_public', 'company_group_month', 'amount_feedbacks', 'integer', 'amount_feedbacks is the type of integer');
  select col_type_is('framethrower_public', 'company_group_month', 'year', 'integer', 'year is the type of integer');
  select col_type_is('framethrower_public', 'company_group_month', 'month', 'integer', 'month is the type of integer');
  select col_type_is('framethrower_public', 'company_group_month', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone');
  select col_type_is('framethrower_public', 'company_group_month', 'updated_at', 'timestamp with time zone', 'updated_at is the type of "timestamp with time zone');

  select * from finish();
rollback;