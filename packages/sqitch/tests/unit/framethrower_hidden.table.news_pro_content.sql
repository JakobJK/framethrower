begin;

  select plan(7);

  select columns_are('framethrower_hidden', 'news_pro_content', array['id', 'news_id', 'video_url', 'body'], 'id, news_id, body, and video_url are the columns');

  select col_is_pk('framethrower_hidden', 'news_pro_content', 'id', 'id is the primary key');
  select col_is_fk('framethrower_hidden', 'news_pro_content', 'news_id', 'profile_id is a foreign key');

  select col_type_is('framethrower_hidden', 'news_pro_content', 'id', 'uuid', 'id is the type of uuid'); -- Getting the ID from mux itself
  select col_type_is('framethrower_hidden', 'news_pro_content', 'news_id', 'uuid', 'upload_id is the type of uuid');
  select col_type_is('framethrower_hidden', 'news_pro_content', 'video_url', 'text', 'upload_id is the type of text');
  select col_type_is('framethrower_hidden', 'news_pro_content', 'body', 'text', 'upload_id is the type of text');

  select * from finish();

rollback;