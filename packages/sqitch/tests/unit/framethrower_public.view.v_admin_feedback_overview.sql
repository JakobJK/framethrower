begin;
  select plan(1);
  select has_view( 'framethrower_public', 'v_admin_feedback_overview', 'v_admin_feedback_overview exists' );
  select * from finish();
rollback;