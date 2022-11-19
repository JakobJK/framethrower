begin;
  select plan(11);

  select columns_are('framethrower_public', 'news_comment', array['id', 'created_at', 'updated_at', 'status', 'profile_id', 'body', 'news_id']);
  select col_is_pk('framethrower_public', 'news_comment', 'id', 'id is a primary key');
  select col_is_fk('framethrower_public', 'news_comment', 'profile_id', 'profile_id is a foreign key');
  select col_is_fk('framethrower_public', 'news_comment', 'news_id', 'profile_id is a foreign key');
  select col_type_is('framethrower_public', 'news_comment', 'id', 'uuid', 'id is the type of text');
  select col_type_is('framethrower_public', 'news_comment', 'profile_id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_public', 'news_comment', 'news_id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_public', 'news_comment', 'body', 'text', 'body is the type of text');
  select col_type_is('framethrower_public', 'news_comment', 'status', 'framethrower_public.publish_status', 'status is the type of framethrower_public.publish_status');
  select col_type_is('framethrower_public', 'news_comment', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone');
  select col_type_is('framethrower_public', 'news_comment', 'updated_at', 'timestamp with time zone', 'updated_at is the type of "timestamp with time zone');

  select * from finish();

rollback;