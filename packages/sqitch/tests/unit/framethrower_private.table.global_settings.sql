begin;
  select plan(5);

  select columns_are('framethrower_private', 'global_settings', array['id', 'name', 'value']);

  select col_is_pk('framethrower_private', 'global_settings', 'id', 'id is the primary key');

  select col_type_is('framethrower_private', 'global_settings', 'id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_private', 'global_settings', 'name', 'text', 'name is the type of text');
  select col_type_is('framethrower_private', 'global_settings', 'value', 'text', 'value is the type of text');

  select * from finish();
rollback;
