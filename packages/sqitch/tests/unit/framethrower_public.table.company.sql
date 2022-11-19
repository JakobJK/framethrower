begin;
  select plan(12);

  select columns_are('framethrower_public', 'company', array['id', 'name', 'name_url_safe', 'link', 'logo', 'description', 'public', 'created_at', 'updated_at', 'address']);

  select col_is_pk('framethrower_public', 'company', 'id', 'id is a primary key');

  select col_type_is('framethrower_public', 'company', 'id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_public', 'company', 'name', 'text', 'name is the type of text');
  select col_type_is('framethrower_public', 'company', 'name_url_safe', 'text', 'name_url_safe is the type of text');
  select col_type_is('framethrower_public', 'company', 'link', 'text', 'link is the type of text');
  select col_type_is('framethrower_public', 'company', 'logo', 'text', 'logo is the type of text');
  select col_type_is('framethrower_public', 'company', 'description', 'text', 'description is the type of text');
  select col_type_is('framethrower_public', 'company', 'public', 'boolean', 'public is the type of boolean');

  select col_type_is('framethrower_public', 'company', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone');
  select col_type_is('framethrower_public', 'company', 'updated_at', 'timestamp with time zone', 'updated_at is the type of "timestamp with time zone');
  select col_type_is('framethrower_public', 'company', 'address', 'json', 'address is the type of json');

  select * from finish();

rollback;