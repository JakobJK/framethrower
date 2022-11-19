-- Deploy flipr:framethrower_public.view.v_pro_list to pg

begin;

create view framethrower_public.v_pro_list as
  select
    req.animation_id,
    res.submission_id,
    res.profile_id,
    res.updated_at,
    res.thumbnail
  from framethrower_public.feedback_request req
  join framethrower_public.feedback_response res
  ON res.feedback_request_id = req.id
  where res.status = 'processed' and req.status ='fulfilled';

  comment on view framethrower_public.v_pro_list is E'@foreignKey (animation_id) references framethrower_public.animation\n@foreignKey (profile_id) references framethrower_public.profile\n@foreignKey (submission_id) references framethrower_public.submission';
  grant select on framethrower_public.v_pro_list to framethrower_user, framethrower_moderator, framethrower_admin;

commit;
