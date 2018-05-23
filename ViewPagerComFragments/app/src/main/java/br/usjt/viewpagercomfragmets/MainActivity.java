package br.usjt.viewpagercomfragmets;

import android.support.v4.app.FragmentManager;
import android.support.v4.view.ViewPager;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    private ViewPager viewPager;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        viewPager = findViewById(R.id.viewPager);
        FragmentManager fm = getSupportFragmentManager();
        viewPager.setAdapter(new FragmentAdapter(fm));

        final ActionBar actionBar = getSupportActionBar();
        actionBar.setNavigationMode(ActionBar.NAVIGATION_MODE_TABS);

        ActionBar.Tab tab1 = actionBar.newTab().setText("Fragment1").
                setTabListener(new FragmentListener(viewPager,0));
        actionBar.addTab(tab1);
        ActionBar.Tab tab2 = actionBar.newTab().setText("Fragment2").
                setTabListener(new FragmentListener(viewPager,1));
        actionBar.addTab(tab2);
        ActionBar.Tab tab3 = actionBar.newTab().setText("Fragment3").
                setTabListener(new FragmentListener(viewPager,2));
        actionBar.addTab(tab3);

        viewPager.setOnPageChangeListener(new ViewPager.OnPageChangeListener() {
            @Override
            public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {

            }

            @Override
            public void onPageSelected(int position) {
                actionBar.setSelectedNavigationItem(position);
            }

            @Override
            public void onPageScrollStateChanged(int state) {

            }
        });
    }
}
