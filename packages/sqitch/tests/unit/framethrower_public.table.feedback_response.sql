begin;
  select plan(11);

  select columns_are('framethrower_public', 'feedback_response', array['id', 'created_at', 'updated_at', 'profile_id', 'submission_id', 'link','thumbnail', 'feedback_request_id', 'status']);

  select col_is_pk('framethrower_public', 'feedback_response', 'id', 'id is a primary key');
  select col_is_fk('framethrower_public', 'feedback_response', 'submission_id', 'submission_id is a foreign key');

  select col_type_is('framethrower_public', 'feedback_response', 'id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_public', 'feedback_response', 'feedback_request_id', 'uuid', 'feedback_request_id is the type of uuid');
  select col_type_is('framethrower_public', 'feedback_response', 'thumbnail', 'text', 'thumbnail is the type of text');
  select col_type_is('framethrower_public', 'feedback_response', 'link', 'text', 'link is the type of text');
  select col_type_is('framethrower_public', 'feedback_response', 'submission_id', 'text', 'submission_id is the type of text');
  select col_type_is('framethrower_public', 'feedback_response', 'status', 'framethrower_public.feedback_response_status', 'id is the type of uuid');

  select col_type_is('framethrower_public', 'feedback_response', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone');
  select col_type_is('framethrower_public', 'feedback_response', 'updated_at', 'timestamp with time zone', 'updated_at is the type of "timestamp with time zone');

  select * from finish();

rollback;