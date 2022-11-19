
begin;
  select plan(13);

  select columns_are('framethrower_public', 'premium', array['id', 'created_at', 'updated_at', 'premium_definition_id', 'profile_id', 'built_in_feedback', 'purchased_feedback', 'status', 'company_id', 'stripe_customer_id']);

  select col_is_pk('framethrower_public', 'premium', 'id', 'id is a primary key');
  select col_is_fk('framethrower_public', 'premium', 'profile_id', 'profile_id is a foreign key');
  select col_is_fk('framethrower_public', 'premium', 'premium_definition_id', 'profile_id is a foreign key');

  select col_type_is('framethrower_public', 'premium', 'id', 'uuid', 'id is the type of text');
  select col_type_is('framethrower_public', 'premium', 'profile_id', 'uuid', 'id is the type of uuid');

  select col_type_is('framethrower_public', 'premium', 'built_in_feedback', 'integer', 'built_in_feedback is the type of integer');
  select col_type_is('framethrower_public', 'premium', 'purchased_feedback', 'integer', 'purchased_feedback is the type of integer');
  select col_type_is('framethrower_public', 'premium', 'status', 'framethrower_public.premium_status', 'intro is the type of text');
  select col_type_is('framethrower_public', 'premium', 'company_id', 'uuid', 'company_id is the type of uuid');
  select col_type_is('framethrower_public', 'premium', 'stripe_customer_id', 'uuid', 'stripe_customer_id is the type of uuid');


  select col_type_is('framethrower_public', 'premium', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone');
  select col_type_is('framethrower_public', 'premium', 'updated_at', 'timestamp with time zone', 'updated_at is the type of "timestamp with time zone');

  select * from finish();

rollback;