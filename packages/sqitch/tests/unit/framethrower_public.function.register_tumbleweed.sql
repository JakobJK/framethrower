begin;
  select plan(2);
  select has_function('framethrower_public', 'register_tumbleweed', 'register_tumbleweed exists');
  select function_returns('framethrower_public', 'register_tumbleweed', 'framethrower_public.bundle_weed', 'register_tumbleweed returns void');

  select * from finish();
rollback;