begin;
  select plan(6);

  select columns_are('framethrower_public', 'tumbleweed', array['id', 'submission_id', 'created_at']);

  select col_is_pk('framethrower_public', 'tumbleweed', 'id', 'id is a primary key');
  select col_is_fk('framethrower_public', 'tumbleweed', 'submission_id', 'submission_id is a foreign key');

  select col_type_is('framethrower_public', 'tumbleweed', 'id', 'uuid', 'id is the type of text');
  select col_type_is('framethrower_public', 'tumbleweed', 'submission_id', 'text', 'submission_id is the type of text');
  select col_type_is('framethrower_public', 'tumbleweed', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone');

  select * from finish();
rollback;