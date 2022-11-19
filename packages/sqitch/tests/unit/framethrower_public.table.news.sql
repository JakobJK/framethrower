begin;
  select plan(12);

  select columns_are('framethrower_public', 'news', array['id', 'created_at', 'updated_at', 'profile_id', 'body', 'intro', 'thumbnail', 'slug', 'title', 'status']);

  select col_is_pk('framethrower_public', 'news', 'id', 'id is a primary key');
  select col_is_fk('framethrower_public', 'news', 'profile_id', 'profile_id is a foreign key');

  select col_type_is('framethrower_public', 'news', 'id', 'uuid', 'id is the type of text');
  select col_type_is('framethrower_public', 'news', 'profile_id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_public', 'news', 'body', 'text', 'body is the type of text');
  select col_type_is('framethrower_public', 'news', 'intro', 'text', 'intro is the type of text');
  select col_type_is('framethrower_public', 'news', 'thumbnail', 'text', 'thumbnail is the type of text');
  select col_type_is('framethrower_public', 'news', 'slug', 'text', 'slug is the type of text');
  select col_type_is('framethrower_public', 'news', 'status', 'framethrower_public.publish_status', 'status is the type of publish_status');
  select col_type_is('framethrower_public', 'news', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone');
  select col_type_is('framethrower_public', 'news', 'updated_at', 'timestamp with time zone', 'updated_at is the type of "timestamp with time zone');

  select * from finish();

rollback;


