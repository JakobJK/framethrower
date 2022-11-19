-- Deploy framethrower:framethrower_public.function.request_profeedback to pg

begin;

  create or replace function framethrower_public.request_profeedback(animationd_id_ text) returns boolean as $$
      declare amount_of_feedback integer;
      declare anim_id text;
      declare result boolean;

      begin
        select id from framethrower_public.animation where profile_id = current_setting('jwt.claims.id', true)::uuid into anim_id;
        select coalesce(premium.built_in_feedback, 0) from framethrower_public.premium where profile_id = current_setting('jwt.claims.id', true)::uuid and premium.status = 'active' into amount_of_feedback;
        case
          when
            anim_id is null
          then
            result = false;
          when
            amount_of_feedback > 0
          then
            insert into framethrower_public.feedback_request (animation_id, status) values (anim_id, 'requested');
            update framethrower_public.premium set built_in_feedback = built_in_feedback - 1 where premium.profile_id = current_setting('jwt.claims.id', true)::uuid;
            result = true;
          else
            result = false;
        end case;
        return result;
      end;
    $$ language plpgsql security definer;

    grant execute on function framethrower_public.request_profeedback(text) to framethrower_user, framethrower_moderator, framethrower_admin;

commit;
