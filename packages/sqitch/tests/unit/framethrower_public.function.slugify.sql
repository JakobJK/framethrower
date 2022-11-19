begin;
  select plan(2);
  select has_function('framethrower_public', 'slugify', array['text'], 'slugify exists');
  select function_returns('framethrower_public', 'slugify', 'text', 'slugify returns void');

  select * from finish();
rollback;