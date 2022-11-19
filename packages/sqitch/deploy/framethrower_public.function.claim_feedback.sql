-- Deploy flipr:framethrower_public.function.claim_feedback to pg

begin;

  create or replace function framethrower_public.claim_feedback(
    feedback_request_id_ text,
    submission_id_ text
    )returns framethrower_public.feedback_response as $$
    declare feed framethrower_public.feedback_response;
    begin
    if 'active' <> current_setting('jwt.claims.instructor', true)
    then
      return null;
    elsif exists(select id from framethrower_public.feedback_response where created_at + interval '6 hour' > NOW() and status = 'conceded' and profile_id = current_setting('jwt.claims.id', true)::uuid)
    then
      return null;
    end if;
    insert into framethrower_public.feedback_response
      (feedback_request_id, profile_id, submission_id)
      values
      (feedback_request_id_::uuid, current_setting('jwt.claims.id')::uuid, submission_id_) returning * into feed;
    return feed;
    end;
  $$ language plpgsql strict security definer;


grant execute on function framethrower_public.claim_feedback(text, text) to framethrower_user, framethrower_moderator, framethrower_admin;

commit;