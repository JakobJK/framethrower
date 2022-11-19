-- Deploy flipr:framethrower_public.function.get_claimed_pending_feedback to pg

begin;
  create or replace function framethrower_public.get_claimed_pending_feedback() returns framethrower_public.feedback_response as $$
    select *
    from framethrower_public.feedback_response
    where profile_id = current_setting('jwt.claims.id', true)::uuid and status = 'pending'
  $$ language sql stable;
  grant execute on function framethrower_public.get_claimed_pending_feedback to framethrower_user, framethrower_moderator, framethrower_admin;
commit;