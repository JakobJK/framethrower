begin;
  select plan(16);

  select columns_are('framethrower_public', 'submission', array['id', 'start_frame', 'end_frame', 'thumbnail_url', 'animation_id', 'video_url', 'frame_rate', 'audio', 'comment', 'short_comment', 'created_at', 'updated_at', 'status']);

  select col_is_pk('framethrower_public', 'submission', 'id', 'id is a primary key');
  select col_is_fk('framethrower_public', 'submission', 'animation_id', 'animation_id is a foreign key');

  select col_type_is('framethrower_public', 'submission', 'id', 'text', 'id is the type of text');
  select col_type_is('framethrower_public', 'submission', 'animation_id', 'text', 'animation_id is the type of text');
  select col_type_is('framethrower_public', 'submission', 'start_frame', 'integer', 'start_frame is the type of integer');
  select col_type_is('framethrower_public', 'submission', 'end_frame', 'integer', 'end_frame is the type of integer');
  select col_type_is('framethrower_public', 'submission', 'thumbnail_url', 'text', 'thumbnail_url is the type of text');
  select col_type_is('framethrower_public', 'submission', 'video_url', 'text', 'video_url is the type of text');
  select col_type_is('framethrower_public', 'submission', 'frame_rate', 'text', 'frame_rate is the type of text');
  select col_type_is('framethrower_public', 'submission', 'audio', 'boolean', 'boolean is the type of audio');
  select col_type_is('framethrower_public', 'submission', 'status', 'framethrower_public.publish_status', 'status is the type of framethrower_public.publish_status');
  select col_type_is('framethrower_public', 'submission', 'comment', 'text', 'comment is the type of text');
  select col_type_is('framethrower_public', 'submission', 'short_comment', 'text', 'short_comment is the type of text');
  select col_type_is('framethrower_public', 'submission', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone');
  select col_type_is('framethrower_public', 'submission', 'updated_at', 'timestamp with time zone', 'updated_at is the type of "timestamp with time zone');

  select * from finish();
rollback;