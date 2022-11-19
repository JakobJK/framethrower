begin;
  select plan(7);

  select columns_are('framethrower_public', 'headline', array['id', 'created_at', 'title', 'link','thumbnail']);

  select col_is_pk('framethrower_public', 'headline', 'id', 'id is a primary key');

  select col_type_is('framethrower_public', 'headline', 'id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_public', 'headline', 'thumbnail', 'text', 'thumbnail is the type of text');
  select col_type_is('framethrower_public', 'headline', 'link', 'text', 'link is the type of text');
  select col_type_is('framethrower_public', 'headline', 'title', 'text', 'title is the type of text');

  select col_type_is('framethrower_public', 'headline', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone');

  select * from finish();

rollback;