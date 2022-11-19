begin;
  select plan(2);
  -- function exists
  select has_function( 'framethrower_hidden', 'generate_short_unique_id', array['text', 'integer'], 'generate_short_unique_id exists');
  select function_returns('framethrower_hidden', 'generate_short_unique_id', 'text', 'generate_short_unique_id returns text');

  select * from finish();
rollback;