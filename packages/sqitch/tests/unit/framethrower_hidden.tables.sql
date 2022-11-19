begin;
  select plan(1);

select tables_are(
    'framethrower_hidden',
    array['feature_flag',
          'issued_tokens',
          'mux_video',
          'submission_rejected',
          'upload',
          'news_pro_content'
    ]
);

   select * from finish();
rollback;