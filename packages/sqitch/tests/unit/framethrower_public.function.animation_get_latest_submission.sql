begin;
  select plan(2);
  select has_function('framethrower_public', 'animation_get_latest_submission', Array['framethrower_public.animation'], 'animation_get_latest_submission exists');
  select function_returns('framethrower_public', 'animation_get_latest_submission', 'framethrower_public.submission', 'animation_get_latest_submission returns submission');

  select * from finish();
rollback;