begin;
  select plan(1);
  select has_view( 'framethrower_public', 'v_admin_feedback_overview_collapsed', 'v_admin_feedback_overview_collapsed exists' );
  select * from finish();
rollback;