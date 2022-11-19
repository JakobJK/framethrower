begin;

  select plan(6);

  select columns_are('framethrower_hidden', 'mux_video', array['id', 'upload_id', 'playback_id'], 'id, upload_id, and playback_id are the columns');

  select col_is_pk('framethrower_hidden', 'mux_video', 'id', 'id is the primary key');
  select col_is_fk('framethrower_hidden', 'mux_video', 'upload_id', 'profile_id is a foreign key');

  select col_type_is('framethrower_hidden', 'mux_video', 'id', 'text', 'id is the type of text'); -- Getting the ID from mux itself
  select col_type_is('framethrower_hidden', 'mux_video', 'upload_id', 'uuid', 'upload_id is the type of uuid');
  select col_type_is('framethrower_hidden', 'mux_video', 'playback_id', 'text', 'upload_id is the type of text');

  select * from finish();

rollback;