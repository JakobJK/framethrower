begin;
  select plan(2);
  select has_function('framethrower_public', 'animation_get_submission_amounts', Array['framethrower_public.animation'], 'animation_get_submission_amounts exists');
  select function_returns('framethrower_public', 'animation_get_submission_amounts', 'bigint', 'animation_get_submission_amounts returns bigint');

  select * from finish();
rollback;