begin;
  select plan(8);

  select columns_are('framethrower_public', 'animation', array['id', 'title', 'profile_id', 'discipline', 'status']);

  select col_is_pk('framethrower_public', 'animation', 'id', 'id is a primary key');
  select col_is_fk('framethrower_public', 'animation', 'profile_id', 'profile_id is a foreign key');

  select col_type_is('framethrower_public', 'animation', 'id', 'text', 'id is the type of text');
  select col_type_is('framethrower_public', 'animation', 'profile_id', 'uuid', 'profile_id is the type of uuid');
  select col_type_is('framethrower_public', 'animation', 'title', 'text', 'title is the type of uuid');
  select col_type_is('framethrower_public', 'animation', 'discipline', 'framethrower_public.discipline', 'title is the type of uuid');
  select col_type_is('framethrower_public', 'animation', 'status', 'framethrower_public.publish_status', 'status is the type of framethrower_public.publish_status');

  select * from finish();
rollback;