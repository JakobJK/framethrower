begin;
  select plan(8);

  select columns_are('framethrower_hidden', 'submission_rejected', array['id', 'upload_id', 'profile_id', 'created_at'], 'id, upload_id, and playback_id are the columns');

  select col_is_pk('framethrower_hidden', 'submission_rejected', 'id', 'id is the primary key');
  select col_is_fk('framethrower_hidden', 'submission_rejected', 'upload_id', 'upload_id is a foreign key');
  select col_is_fk('framethrower_hidden', 'submission_rejected', 'profile_id', 'profile_id is a foreign key');

  select col_type_is('framethrower_hidden', 'submission_rejected', 'id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_hidden', 'submission_rejected', 'upload_id', 'uuid', 'upload_id is the type of text');
  select col_type_is('framethrower_hidden', 'submission_rejected', 'profile_id', 'uuid', 'upload_id is the type of text');
  select col_type_is('framethrower_hidden', 'submission_rejected', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone"');

  select * from finish();

rollback;