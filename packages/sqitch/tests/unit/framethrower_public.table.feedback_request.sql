begin;
  select plan(8);

  select columns_are('framethrower_public', 'feedback_request', array['id', 'created_at', 'updated_at', 'animation_id', 'status']);

  select col_is_pk('framethrower_public', 'feedback_request', 'id', 'id is a primary key');
  select col_is_fk('framethrower_public', 'feedback_request', 'animation_id', 'animation_id is a foreign key');

  select col_type_is('framethrower_public', 'feedback_request', 'id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_public', 'feedback_request', 'animation_id', 'text', 'animation_id is the type of text');
  select col_type_is('framethrower_public', 'feedback_request', 'status', 'framethrower_public.feedback_request_status', 'id is the type of uuid');

  select col_type_is('framethrower_public', 'feedback_request', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone');
  select col_type_is('framethrower_public', 'feedback_request', 'updated_at', 'timestamp with time zone', 'updated_at is the type of "timestamp with time zone');

  select * from finish();

rollback;