begin;
  select plan(9);

  select columns_are('framethrower_public', 'premium_definition', array['id', 'name', 'max_frames', 'daily_posts', 'concurrent_projects', 'stripe_price_id', 'price']);

  select col_is_pk('framethrower_public', 'premium_definition', 'id', 'id is a primary key');

  select col_type_is('framethrower_public', 'premium_definition', 'id', 'uuid', 'id is the type of text');
  select col_type_is('framethrower_public', 'premium_definition', 'name', 'framethrower_public.profile_premium', 'id is the type of uuid');
  select col_type_is('framethrower_public', 'premium_definition', 'max_frames', 'integer', 'max_frames is the type of integer');
  select col_type_is('framethrower_public', 'premium_definition', 'daily_posts', 'integer', 'body is the type of integer');
  select col_type_is('framethrower_public', 'premium_definition', 'concurrent_projects', 'integer', 'concurrent_projects is the type of integer');
  select col_type_is('framethrower_public', 'premium_definition', 'stripe_price_id', 'text', 'stripe_price_id is the type of text');
  select col_type_is('framethrower_public', 'premium_definition', 'price', 'integer', 'price is the type of integer');

  select * from finish();

rollback;