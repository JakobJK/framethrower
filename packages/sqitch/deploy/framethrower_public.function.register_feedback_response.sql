-- Deploy flipr:framethrower_public.function.register_feedback_response to pg

begin;
  create or replace function framethrower_public.register_feedback_response(
    thumbnail_ text,
    link_ text
    )returns framethrower_public.animation as $$
    declare request framethrower_public.feedback_request;
    declare response framethrower_public.feedback_response;
    declare animation framethrower_public.animation;
    begin
      if current_setting('jwt.claims.instructor', true) != 'active' then
         return null;
      end if;
      update framethrower_public.feedback_response set link = link_, thumbnail=thumbnail_, status='uploading', updated_at = now()  where status='pending' and profile_id = current_setting('jwt.claims.id', true)::uuid returning * into response;
      update framethrower_public.feedback_request set updated_at = now() where id = response.feedback_request_id returning * into request;
      select * from framethrower_public.animation where id = request.animation_id into animation;
      return animation;
    end;
  $$ language plpgsql strict security definer;
grant execute on function framethrower_public.register_feedback_response(text, text) to framethrower_user, framethrower_moderator, framethrower_admin;
commit;
