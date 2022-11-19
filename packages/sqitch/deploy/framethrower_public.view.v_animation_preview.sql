begin;

    create view framethrower_public.v_animation_preview as
    select distinct on (anim.id)
      anim.id, subd.id as submission_id,
      count(subd.id) as submissions,
      (select count(note.id) from framethrower_public.note where submission_id = subd.id and note.status = 'published') as notes,
      (select count(feedback_request.id) from framethrower_public.feedback_request where status = 'fulfilled' and animation_id = anim.id) as feedback_count,
      anim.profile_id,
      anim.title,
      subd.start_frame,
      subd.end_frame,
      subd.thumbnail_url,
      sub.created_at,
      subd.audio,
      subd.short_comment,
      subd.created_at as updated_at
    from framethrower_public.animation anim
    join framethrower_public.submission sub on sub.animation_id = anim.id
    join framethrower_public.submission subd on subd.animation_id = anim.id
    join framethrower_public.submission subc on subc.animation_id = anim.id
    join framethrower_public.profile prof on anim.profile_id = prof.id
    where anim.status = 'published'
    and sub.status = 'published'
    group by anim.id, sub.id, subd.id, prof.username, prof.avatar, prof.id
    order by anim.id, sub.created_at asc, subd.created_at desc;

    comment on view framethrower_public.v_animation_preview is E'@foreignKey (profile_id) references framethrower_public.profile';

    grant select on framethrower_public.v_animation_preview to framethrower_inactive, framethrower_banned, framethrower_anonymous, framethrower_user, framethrower_moderator, framethrower_admin;

commit;