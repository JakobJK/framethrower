
begin;
  select plan(16);

  select columns_are('framethrower_public', 'profile', array['id', 'created_at', 'updated_at', 'username', 'about', 'firstname', 'lastname', 'reel_description', 'avatar', 'banner', 'occupation', 'role', 'organisation', 'reel']);

  select col_is_pk('framethrower_public', 'profile', 'id', 'id is a primary key');

  select col_type_is('framethrower_public', 'profile', 'id', 'uuid', 'id is the type of text');
  select col_type_is('framethrower_public', 'profile', 'username', 'text', 'id is the type of text');
  select col_type_is('framethrower_public', 'profile', 'about', 'text', 'id is the type of text');
  select col_type_is('framethrower_public', 'profile', 'firstname', 'text', 'firstname is the type of text');
  select col_type_is('framethrower_public', 'profile', 'lastname', 'text', 'lastname is the type of text');
  select col_type_is('framethrower_public', 'profile', 'reel_description', 'text', 'reel_description is the type of text');
  select col_type_is('framethrower_public', 'profile', 'reel', 'text', 'reel is the type of text');
  select col_type_is('framethrower_public', 'profile', 'avatar', 'text', 'avatar is the type of text');
  select col_type_is('framethrower_public', 'profile', 'banner', 'text', 'banner is the type of text');
  select col_type_is('framethrower_public', 'profile', 'occupation', 'text', 'occupation is the type of text');
  select col_type_is('framethrower_public', 'profile', 'organisation', 'text', 'organisation is the type of text');
  select col_type_is('framethrower_public', 'profile', 'role', 'framethrower_public.user_role', 'role is the type of role');
  select col_type_is('framethrower_public', 'profile', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone');
  select col_type_is('framethrower_public', 'profile', 'updated_at', 'timestamp with time zone', 'updated_at is the type of "timestamp with time zone');

  select * from finish();

rollback;