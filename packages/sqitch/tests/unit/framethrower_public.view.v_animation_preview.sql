begin;
  select plan(1);
  select has_view( 'framethrower_public', 'v_animation_preview', 'v_animation_preview exists' );
  select * from finish();
rollback;