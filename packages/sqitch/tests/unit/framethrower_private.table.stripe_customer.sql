begin;
  select plan(9);

  select columns_are('framethrower_private', 'stripe_customer', array['id', 'profile_id', 'customer_id', 'subscription_id', 'cancel_at_period_end', 'current_period_end']);

  select col_is_pk('framethrower_private', 'stripe_customer', 'id', 'id is a primary key');
  select col_is_fk('framethrower_private', 'stripe_customer', 'profile_id', 'id is a primary key');

  select col_type_is('framethrower_private', 'stripe_customer', 'id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_private', 'stripe_customer', 'profile_id', 'uuid', 'profile_id is the type of uuid');
  select col_type_is('framethrower_private', 'stripe_customer', 'customer_id', 'text', 'customer_id is the type of uuid');
  select col_type_is('framethrower_private', 'stripe_customer', 'subscription_id', 'text', 'subscription_id is the type of uuid');
  select col_type_is('framethrower_private', 'stripe_customer', 'cancel_at_period_end', 'boolean', 'cancel_at_period_end is the type of boolean');
  select col_type_is('framethrower_private', 'stripe_customer', 'current_period_end', 'integer', 'cancel_at_period_end is the type of uuid');

  select * from finish();

rollback;