begin;
  select plan(11);

  select columns_are('framethrower_public', 'note_comment', array['id', 'created_at', 'updated_at', 'profile_id', 'body', 'status', 'note_id']);

  select col_is_pk('framethrower_public', 'note_comment', 'id', 'id is a primary key');
  select col_is_fk('framethrower_public', 'note_comment', 'profile_id', 'profile_id is a foreign key');
  select col_is_fk('framethrower_public', 'note_comment', 'note_id', 'profile_id is a foreign key');

  select col_type_is('framethrower_public', 'note_comment', 'id', 'uuid', 'id is the type of text');
  select col_type_is('framethrower_public', 'note_comment', 'profile_id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_public', 'note_comment', 'note_id', 'text', 'id is the type of uuid');
  select col_type_is('framethrower_public', 'note_comment', 'body', 'text', 'body is the type of text');
  select col_type_is('framethrower_public', 'note_comment', 'status', 'framethrower_public.publish_status', 'status is of type framethrower_public.publish_status');
  select col_type_is('framethrower_public', 'note_comment', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone');
  select col_type_is('framethrower_public', 'note_comment', 'updated_at', 'timestamp with time zone', 'updated_at is the type of "timestamp with time zone');

  select * from finish();

rollback;