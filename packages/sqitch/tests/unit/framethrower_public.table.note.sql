
begin;
  select plan(12);

  select columns_are('framethrower_public', 'note', array['id', 'created_at', 'updated_at', 'submission_id', 'profile_id', 'body', 'paragraph','status']);

  select col_is_pk('framethrower_public', 'note', 'id', 'id is a primary key');
  select col_is_fk('framethrower_public', 'note', 'profile_id', 'profile_id is a foreign key');
  select col_is_fk('framethrower_public', 'note', 'submission_id', 'profile_id is a foreign key');

  select col_type_is('framethrower_public', 'note', 'id', 'text', 'id is the type of text');
  select col_type_is('framethrower_public', 'note', 'profile_id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_public', 'note', 'submission_id', 'text', 'submission_id is the type of text');
  select col_type_is('framethrower_public', 'note', 'body', 'text', 'body is the type of text');
  select col_type_is('framethrower_public', 'note', 'paragraph', 'text', 'intro is the type of text');
  select col_type_is('framethrower_public', 'note', 'status', 'framethrower_public.publish_status', 'status is of type framethrower_public.publish_status');
  select col_type_is('framethrower_public', 'note', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone');
  select col_type_is('framethrower_public', 'note', 'updated_at', 'timestamp with time zone', 'updated_at is the type of "timestamp with time zone');

  select * from finish();

rollback;